import firebase from './firebase';

const newUser = async (userData) =>{
    try{
    const resUser = await firebase.auth().createUserWithEmailAndPassword(userData.email, userData.password)
    console.log(resUser.user.uid);
    if(resUser.user.uid){
    await firebase.firestore().collection("Users").add({
            nombre: userData.name,
            apellido: userData.lastName,
            userId: resUser.user.uid,
        });
    return resUser.user.uid;
    }  
    }catch(error){console.log(error)}
};

export default newUser;

const usuario = async (userInfo)=>{
    try{
    const resUser2 = await firebase.auth().signInWithEmailAndPassword(userInfo.email, userInfo.password)
    console.log(resUser2.user.uid);
    return resUser2?.user.uid
    }catch(error){console.log(error)}
};

export { usuario };