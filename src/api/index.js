export const getDatabase = async () => {
    const request = await fetch('https://chat-quiz-website-81ec6-default-rtdb.firebaseio.com/');
    return await request.json();
}