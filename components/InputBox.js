import React, { useState } from 'react'
import Image from 'next/image'
import { useSession } from 'next-auth/react'
import { EmojiHappyIcon } from '@heroicons/react/outline'
import { VideoCameraIcon, CameraIcon, PaperAirplaneIcon } from '@heroicons/react/solid'
import { useRef } from 'react'
import { db, storage } from '../firebase'
import firebase from 'firebase/app';
import { collection , addDoc, doc, updateDoc, serverTimestamp } from "firebase/firestore" ;
import { getDownloadURL, ref, uploadString } from 'firebase/storage'


function InputBox() {

     const { data : session } = useSession()
     const inputRef = useRef(null)
      const filepickerRef = useRef(null)
      const [ imageToPost, setImageToPost ] = useState(null)
      const storageRef = ref(storage , `posts/${Date.now()}`)
    

      // firebaseFirestore.instance.collection('posts').add({
      //   message: inputRef.current.value,
      

      const sendPost = (e) => {
        e.preventDefault();
        if (!inputRef.current.value) return;
        const docRef = addDoc(collection(db, "posts"), {
          message: inputRef.current.value,
          name: session.user.name,
          // email: session.user.email,
          image: session.user.image,
          timestamp: serverTimestamp()
        }).then((docRef) => {
          if (imageToPost) {
            uploadString(storageRef, imageToPost, 'data_url').then((snapshot) => {
              getDownloadURL(snapshot.ref).then((url) => {
                updateDoc(doc(db, "posts", docRef.id), {
                  postImage: url
                }, { merge: true })
              })
            })
          }
        })


         removeImage()
        
        console.log(docRef.id);
        
        inputRef.current.value = '';
      }

      const addImageToPost = (e) => {
        const reader = new FileReader();
        if (e.target.files[0]) {
          reader.readAsDataURL(e.target.files[0]);
        }
    
        reader.onload = (readerEvent) => {
          setImageToPost(readerEvent.target.result);
        };
      };

      const removeImage = () => {
        setImageToPost(null)
      }

  return (
    <div className=' bg-white p-2 shadow-md rounded-2xl font-medium mt-6'>
        <div className='flex  space-x-4 p-4 items-center'>
          <Image
            className="rounded-full"
            src={session.user.image}
            width={40}
            height={40}
            layout="fixed"
            alt='profile'
          /> 
          <form className='flex flex-1'>
            <input className='rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none' type="text"  
            ref={inputRef}
            placeholder={`What's on your mind, ${session.user.name}?`} />
            <button hidden type='submit' onClick={sendPost}>Submit</button>
            <PaperAirplaneIcon onClick={sendPost} className="h-5 text-blue-500" />
          </form>
          {imageToPost && (
            <div onClick={ removeImage  } className=" flex flex-col filter hover:brightness-110 transition duration-150 hover:scale-105 cursor-pointer">
              <img src={imageToPost} alt="post" className=" h-10 object-contain rounded-lg" />
              <p className='text-red-400'> Remove </p>
            </div>
            )}

        </div>
        <div className='flex justify-evenly p-3 border-t'>
          <div className='inputIcon'>
            <VideoCameraIcon className='h-7 text-red-500' />
            <p className='text-xs sm:text-sm xl:text-base'>Live Video</p>
          </div>
          <div className='inputIcon' onClick={() => filepickerRef.current.click() }>
            <CameraIcon className='h-7 text-red-500' />
            <p className='text-xs sm:text-sm xl:text-base'>Photo/video</p>
            <input ref={filepickerRef} onChange={addImageToPost} type="file" hidden/>
          </div>
          <div className='inputIcon' >
            <EmojiHappyIcon className='h-7 text-red-500' />
            <p className='text-xs sm:text-sm xl:text-base'>Live Video</p>
          </div>
        </div>
    </div>
  )
}

export default InputBox
