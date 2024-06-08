'use client';
import { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa'
import { toast } from 'react-toastify';
import { useSession } from 'next-auth/react';


const ArtworkContactForm = ({ artwork }) => {

  const { data: session } = useSession();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [wasSubmitted, setWasSubmitted] = useState(false);

  
  const handleSubmit =  async (e) => {
    e.preventDefault();

    const data  = {
      name,
      email,
      phone,
      message,
      artwork: artwork._id
    };

    try {
      const res = await fetch('/api/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (res.status === 200) {
        toast.success('Message sent successfully');
        setWasSubmitted(true);
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
        
      } else if (res.status === 400 || res.status === 401) {
        const data = await res.json();
        toast.error(dataObj.message);
      } else {
        toast.error('Error sending form');
      }
    } catch (error) {
      console.log(error);
      toast.error('Error sending form');
    } 
  };

    
  

  return (
           
    <div className="bg-white p-6 rounded-lg shadow-md">
    <h3 className="text-xl font-bold  text-center">
      Contact the Artist,</h3>
       <h3 className="text-xl font-bold  text-center">Mary Anne Fusco, </h3>
       <h3 className="text-xl font-bold mb-6 text-center">about this artwork</h3>
      <p className="text-gray-500 mb-4 text-center">
       Negotiable Digital Licensing is Available.
    </p>
    {!session ? (
        <p className='text-center text-rose-500'>You must be logged in to send a message</p>
      ) : wasSubmitted ? (
    <p className='text-green-500 mb-4 text-center'>Your message has been sent successfully</p>    
      ):(
        <form 
        onSubmit={handleSubmit}>
        <div className='mb-4'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='name'
          >
            Name:
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='name'
            type='text'
            placeholder='Enter your name'             
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='phone'
            >
              Phone:
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='phone'
              type='text'
              placeholder='Enter your phone number'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="message"
            >
              Message:
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 h-44 focus:outline-none focus:shadow-outline"
              id="message"
              placeholder="Enter your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
    
            ></textarea>
          </div>
          <p className="text-gray-500 text-center text-sm">
          If you are interested in something similar to this piece</p>
          <p className="text-gray-500 text-sm mb-4 text-center">
           use this contact form to inquire about options for commissions.
        </p>
          <div>
            <button
              className="bg-rose-900 hover:bg-rose-800 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline flex items-center justify-center"
              type="submit"
            >
              <FaPaperPlane className="mr-2"></FaPaperPlane> Send Message
            </button>
          </div>
        </form>

      )}      

    
   

  </div>
  )
}

export default ArtworkContactForm




/* 'use client';
import { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { useSession } from 'next-auth/react';

const ArtworkContactForm = ({ artwork }) => {
  const { data: session } = useSession();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [phone, setPhone] = useState('');
  const [wasSubmitted, setWasSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name,
      email,
      phone,
      message,
      artwork: artwork._id,
    };

    try {
      const res = await fetch('/api/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (res.status === 200) {
        toast.success('Message sent successfully');
        setWasSubmitted(true);
        
          setName('');
          setEmail('');
          setPhone('');
          setMessage('');
       
      } else if (res.status === 400 || res.status === 401) {
        const data = await res.json();
        toast.error(data.message);
      } else {
        toast.error('Error sending form');
      }
    } catch (error) {
      console.log(error);
      toast.error('Error sending form');
    } 
  };

  return (
    <div className='bg-white p-6 rounded-lg shadow-md'>
      <h3 className='text-xl font-bold mb-6'>Contact Artwork Manager</h3>
      {!session ? (
        <p>You must be logged in to send a message</p>
      ) : wasSubmitted ? (
        <p className='text-green-500 mb-4'>
          Your message has been sent successfully
        </p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='name'
            >
              Name:
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='name'
              type='text'
              placeholder='Enter your name'
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='email'
            >
              Email:
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='email'
              type='email'
              placeholder='Enter your email'
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='phone'
            >
              Phone:
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='phone'
              type='text'
              placeholder='Enter your phone number'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='message'
            >
              Message:
            </label>
            <textarea
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 h-44 focus:outline-none focus:shadow-outline'
              id='message'
              placeholder='Enter your message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <div>
            <button
              className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline flex items-center justify-center'
              type='submit'
            >
              <FaPaperPlane className='mr-2' /> Send Message
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
export default ArtworkContactForm; */