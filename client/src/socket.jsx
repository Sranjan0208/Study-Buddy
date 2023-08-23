import { io } from "socket.io-client";

const URL = "https://study-buddy-backend-alpha.vercel.app";
const socket = io(URL, { autoConnect: false });

export default socket;
