// // SDK SDK Firebase cốt lõi luôn được yêu cầu và phải được liệt kê trước
// <script src = "/ __ / firebase / 7.14.4 / firebase-app.js" > </ script>
// <script src = "/__/firebase/7.14.4/firebase-analytics .js " > </ script>
// <script src = " /__/firebase/init.js " > </ script>


"site": "restaurant-dating",

import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
	apiKey: "YOUR_API_KEY",
	authDomain: "YOUR_Auth_Domain",
	databaseURL: "YOUR_Database_URL",
});

const base = Rebase.createClass(firebase.database());

export { firebaseApp };
export default base;
