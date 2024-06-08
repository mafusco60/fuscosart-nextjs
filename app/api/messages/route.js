import connectDB from '@/config/database';
import Message from '@/models/Message';
import { getSessionUser } from '@/utils/getSessionUser';

export const dynamic = 'force-dynamic';

//POST /api/messages
export const POST = async (request) => {
try {
    await connectDB();
    const { name, email, phone, message, artwork } = 
    await request.json;

    const sessionUser = await getSessionUser();

    if (!sessionUser || !sessionUser.user) {
      return new Response(
        JSON.stringify({ message: 'You must be logged in to send a message' }),
        { status: 401 }
      );
    }

    const { user } = sessionUser;


    const newMessage = new Message({
        sender: user.id,
        artwork,
        name,
        email,
        phone,
        body: message,
    });
    console.log(newMessage, 'newMessage');
    await newMessage.save();

    return new Response(JSON.stringify
     ({ message: 'Message Sent' }), { status: 200 });

 } catch (error) {
    console.log(error);
    return new Response(JSON.stringify
        ({ message: 'Something went wrong' }), { status: 500 });
   
    
}
    

}