import { useParams } from "react-router";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { appId,joinRoom,serverSecret } from "./Config";

const Room=()=>{
    const {roomId} = useParams();
    console.log("roomid",roomId)

    const meeting=(element)=>{
        const token = ZegoUIKitPrebuilt.generateKitTokenForTest(
            appId,
            serverSecret,
            roomId,
            Date.now().toString(),
            joinRoom
        );
        const zc = ZegoUIKitPrebuilt.create(token);
    
        zc.joinRoom({
            container : element ,
            scenario:{
                mode : ZegoUIKitPrebuilt.OneONoneCall
            },
            showScreenSharingButton: false,
            sharedLinks:[{
                name: "Copy Link",
                url : window.location.href
            }]
        });
    }
    return (
    <div ref={meeting} style={{width:'100vw',height:'100vh'}}>
        
    </div>
    );
}
export default Room;