export const API_CHANNEL = 'ion-sfu';

export interface Configuration extends RTCConfiguration {
    codec: 'vp8' | 'vp9' | 'h264';
}

export interface Trickle {
    candidate: RTCIceCandidateInit;
    target: Number;
}