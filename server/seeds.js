import Chats from '/lib/collections/chats';
import Messages from '/lib/collections/messages';


const seed = () => {
    if (Chats.find().count() === 0) {
        for (let i = 0; i < 10; i++) {
            Chats.insert({
                name: `Chat #${i}`,
                particpants: [{
                    _id: 'BWY68jr3LMzfkkmuB',
                    name: 'Jason Fan'
                }, {
                    _id: 'JwzwM7hnXNLicp3Qj',
                    name: 'Andrew Lawrence'
                }]
            });

            Messages.insert({
                text: `Hi Andrew! This is a test message for chat ${i}`,
                createdAt: newDate(),
                user: {
                    _id: 'BWY68jr3LMzfkkmuB',
                    name: 'Jason Fan',
                },
            });
        }
    }
};

export default seed;