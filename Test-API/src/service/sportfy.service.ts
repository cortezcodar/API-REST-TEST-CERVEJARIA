
import fetch from 'node-fetch';
export class SportfyService {

    constructor() {


    }

    public async buscarPlaylistPorNome(corona: string) {

        const response = await fetch(`https://api.spotify.com/v1/search?q=${corona}&type=playlist&limit=1`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': process.env.TOKEN_SPORTFY
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



