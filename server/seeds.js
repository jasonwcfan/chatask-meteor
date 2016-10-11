import Chats from '/lib/collections/chats';
import Messages from '/lib/collections/messages';

const seed = () => {
    if (Chats.find().count() === 0) {
        for (let i = 0; i < 5; i++) {
            var chatId = Chats.insert({
                name: `Chat #${i}`,
                particpants: [{
                    _id: 'n9cSwSWS4sbZ63HMH',
                    name: 'Jason Fan'
                }, {
                    _id: 'RXjggZLA4YBpZkkRz',
                    name: 'Test User'
                }]
            });

            Messages.insert({
                text: `Hi Test User! This is a test message for chat ${i}`,
                createdAt: new Date(),
                user: {
                    _id: 'n9cSwSWS4sbZ63HMH',
                    name: 'Jason Fan',
                },
                chatId: chatId
            });
        }
    }
};

export default seed;
