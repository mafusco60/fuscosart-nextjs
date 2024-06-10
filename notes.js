// One thing that I want to mention that may save you some headaches is that when you change your models, you need to restart your server and delete the `.next` folder in your project root. This will clear the cache and allow the server to pick up the new models.


<div className='mb-4 bg-rose-50 p-4'>
              <label className='block text-gray-700 font-bold mb-2'>
                Rates (Leave blank if not applicable)
              </label>
              <div className='flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4'>
                <div className='flex items-center'>
                  <label htmlFor='weekly_rate' className='mr-2'>
                    Weekly
                  </label>
                  <input
                    type='number'
                    id='weekly_rate'
                    name='rates.weekly'
                    className='border rounded w-full py-2 px-3'
                    value={ fields.rates.weekly }
                    onChange={ handleChange }
                  />
                </div>
                <div className='flex items-center'>
                  <label htmlFor='monthly_rate' className='mr-2'>
                    Monthly
                  </label>
                  <input
                    type='number'
                    id='monthly_rate'
                    name='rates.monthly'
                    className='border rounded w-full py-2 px-3'
                    value={ fields.rates.monthly }
                    onChange={ handleChange }
                  />
                </div>
                <div className='flex items-center'>
                  <label htmlFor='nightly_rate' className='mr-2'>
                    Nightly
                  </label>
                  <input
                    type='number'
                    id='nightly_rate'
                    name='rates.nightly'
                    className='border rounded w-full py-2 px-3'
                    value={ fields.rates.nightly }
                    onChange={ handleChange }
                  />
                </div>
              </div>
            </div>


//getAdminStatus//
//export const getAdminStatus = async () => {

    //const session = await getServerSession(authOptions);
   

    /* if (!session || !session.user) {
      return null;
    } */
   /*  await
    connectDB (); */

   // const profile = session?.user;
            // 1. Connect to database
             // await connectDB();
            // 2. Check if user exists in database
             /*  const isUserAdmin = await User.findOne({ id: profile });
              console.log(isUserAdmin, 'isUserAdmin');
           const admin = isUserAdmin.is_admin;
              console.log(admin, 'admin'); */
      
    
    // if database is already connected, don't connect again
    
    /* if ( connected){
        console.log('MongoDB is already connected...');
        return; 
        
     } else {
        try {
            await mongoose.connect(process.env.MONGODB_URI)
            connected = true;
            console.log('MongoDB is connected...');
        
        } catch (error) {
            console.log('error connecting to MongoDB: ', error);
         */
        /* const userId = await session?.user?.id;
        const isAdmin = await User.userId;
        console.log(isAdmin, 'isAdmin-getAdminStatus');
        console.log(userId, 'userId-getAdminStatus');
        const admin = await User.findOne({ id: userId });
        console.log(admin, 'admin-getAdminStatus');

        //console.log(userId, 'console userId');
        return ({userId} ); */
      


    
 
  



