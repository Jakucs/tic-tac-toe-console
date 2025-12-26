import promptSync from 'prompt-sync';
const prompt = promptSync({ sigint: true });

//segédfüggvény késleltetéshez:
/*function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}*/