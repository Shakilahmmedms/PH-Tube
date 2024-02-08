const loadAllData =(global) =>{
    const allCategoryValue = document.getElementById('allCategory').value;
    
    fetch(`https://openapi.programming-hero.com/api/videos/category/${allCategoryValue ? allCategoryValue:global}`)
        .then(res => res.json())
        .then(alldata => displayData(alldata.data))    

}
const loadMusiclData =() =>{
    const allCategoryValue = document.getElementById('musicCategory').value;
    
    fetch(`https://openapi.programming-hero.com/api/videos/category/${allCategoryValue}`)
        .then(res => res.json())
        .then(alldata => displayData(alldata.data))    

}
const loadComdeyData =() =>{
    const allCategoryValue = document.getElementById('comdeyCategory').value;
    
    fetch(`https://openapi.programming-hero.com/api/videos/category/${allCategoryValue}`)
        .then(res => res.json())
        .then(alldata => displayData(alldata.data))    

}
const loadDrawData =() =>{
    const allCategoryValue = document.getElementById('drawCategory').value;
    
    fetch(`https://openapi.programming-hero.com/api/videos/category/${allCategoryValue}`)
        .then(res => res.json())
        .then(alldata => displayData(alldata.data))    

}


function displayData(data){
    const categoryContainer = document.getElementById('category-container');
    if(data.length == 0){
        const noData = document.createElement('div');
        noData.classList.add('nodata');
        noData.innerHTML = `
        <img src= "images/Icon.png" alt="picture"/> 
        <h3>Oops!! Sorry, There is no content here</h3>`;
        categoryContainer.appendChild(noData)
    }
    else{
        data.forEach(ct => {
            const card = document.createElement('div');
            card.classList.add('box');
            card.innerHTML = `
            <div class="thumbanail">
                <img class='thumbanail-img' src="${ct.thumbnail}" alt="picture">
                <p class='post-date'>${secondToMinutes(ct.others.posted_date)}</p>
            </div>
            <div class="title-views">
                <div class ='profile-img'>
                    <img class='profile-pic' src="${ct.authors.map(author => author.profile_picture)}" alt="picture">
                </div>
                <div class='title-name'>
                    <h4>${ct.title}</h4>
                    <div class='verify-profile_name'>
                        <p>${ct.authors.map(author => author.profile_name)}</p>
                        
                        ${ct.authors[0].verified == true? `<img class='verify' src="/images/verify.png" alt="">`:""}
                    </div>
                    <p>${ct.others.views} Views</p>
                </div>
            </div>
            `;
            categoryContainer.appendChild(card)
        })
    }
}


function sortByView(view) {
    view.sort((a,b)=>a-b);
    view.reverse();
    return sortByVideosViews(view);
}
 

function secondToMinutes(seconds){
    const hours = Math.floor(seconds/ 3600);
    const minutes = Math.floor(seconds/ 60) % 60;

    return `${hours} hrs ${minutes} min ago`
}

loadAllData(1000)

