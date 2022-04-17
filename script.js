const videoElement = document.getElementById("video");
const videoButton = document.getElementById("button");

//Prompt user to select media stream, pass to video & then play the video
async function selectMediaStream(){
    try{
        //Here we are capturing various display media devices available on the viewport. 
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        };
    }catch(e){
        //Catch errors here
        console.trace(e);
    }
}

videoButton.addEventListener('click', async () => {
    //Disable the button
    videoButton.disabled = true;

    //Start PIP
    await videoElement.requestPictureInPicture();

    //Reset the button
    videoButton.disabled = false;
});

//Onload
selectMediaStream();