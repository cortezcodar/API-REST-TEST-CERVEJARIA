
import fetch from 'node-fetch';
export class SportfyService {

    constructor() {


    }

    public async buscarPlaylistPorNome(corona: string) {

        const response = await fetch(`https://api.spotify.com/v1/search?q=${corona}&type=playlist&limit=1`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer BQBHrYSre8OXb1tG2WBZ7S2CM_6tewbzZ64H2htKvzLWfseW5-y8D8zCnjQnr85v2eHNn8Y2d6Pv7jB3xd2i2lSzVYqCS06v65eZ-wYoSvCTM_nNSVweIKU_aSU8Cgl2qspCFpE5oX2PCAy_Afj-JU_gckIZLFXTwBOVEunBfO7k2GelP38i3vO06DMsHhLWa2TmbICV7ESRgzbwZvk94ChxSfeorSRkbxA'
            }


        });


        const sportfy = await response.json()

        const playlist = sportfy.playlists.items[0]

        if (playlist) {
            return {
                name: playlist.name,
                tracks: playlist.tracks
            }
        }

    }

}



