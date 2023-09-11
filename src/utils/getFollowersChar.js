export function getFollowerChar(followers){

    

    if(followers.toString().length > 3 && followers.toString().length <= 6){


        return followers.toString().slice(0, -3) + "K"

    }
    else if(followers.toString().length > 6 && followers.toString().length <= 9){

        return followers.toString().slice(0, -6) + "M"
    }
    else if(followers.toString().length > 9 && followers.toString().length <= 12){

        return followers.toString().slice(0, -9) + "B"
    }
    else{

        return followers
    }

}