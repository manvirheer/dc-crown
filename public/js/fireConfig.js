const firebaseConfig = {
    apiKey: "AIzaSyATcKT0lCZyOcKTxOHXSpI4d1bZs1ynyVQ",
    authDomain: "dc-crown.firebaseapp.com",
    databaseURL: "https://dc-crown.firebaseio.com",
    projectId: "dc-crown",
    storageBucket: "dc-crown.appspot.com",
    messagingSenderId: "555456365972",
    appId: "1:555456365972:web:803eb1ab8987013581fb81",
    measurementId: "G-Y03F6FRG7Q"
};
//JLKJADSK
firebase.initializeApp(firebaseConfig);

const txtEmail = document.querySelector("#txtEmail");
const txtPassword = document.querySelector("#txtPassword");
const btnLogin = document.querySelector("#btnLogin");

btnLogin.addEventListener("click", e => {
    e.preventDefault();
    const email = txtEmail.value;
    const password = txtPassword.value;
    const auth = firebase.auth();
    const promise = auth.signInWithEmailAndPassword(email, password);
    promise.catch(e => console.log(e.message));

})