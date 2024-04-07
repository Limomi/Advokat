const Search__items = document.querySelector(".search__items")

async function search () {
    Search__items.innerHTML = "";
    let searchTxt = document.getElementsByClassName("search__input")[0].value;
    if(searchTxt.length>2)
    {
        answordArray = await server(searchTxt);
        for(let i = 0; i<3 && i < answordArray.length; i++)
        {
            Search__items.innerHTML +=`
        <a href="${answordArray[i].link}" class="search__item__a"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    >
            <div class="search__item__a__txt">
                ${answordArray[i].zap}
            </div>
        </a>`;
        }
    }
    else
    {

    }
}

async function server(userRequest)
{
    userRequest = userRequest.toLowerCase()
    zapList = await fetch("https://raw.githubusercontent.com/Limomi/advoJson/main/arrchik.json").then(res=>res.json())
    answordArray = new Array()
    zapList.forEach((el) => {
    if(el.zap.substring(0, userRequest.length) == userRequest)
    {
        answordArray.push(el);
    }
    }
    )
    return(answordArray);
}