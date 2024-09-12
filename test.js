(async () => {
    const { User } = require('./models');
    
    try {
      const user = await User.create({ username: 'testuser', password: 'testpassword' });
      console.log('User created:', user.toJSON());
    } catch (error) {
      console.error('Error creating user:', error);
    }
  })();
