let count = 1
document.getElementById('pageNumber').innerHTML = `Page Number ${ count }`

async function GetDataFrom_API() {
    const URL = `https://api.github.com/repositories/1296269/issues?page=${count}&per_page=5`
    const response = await fetch(URL);
    const jsonData = await response.json();
    // console.log(jsonData)
    document.getElementById('display-data').innerHTML = jsonData.map((issue)=>{ 
        return  `<ol> <p id='issue-num'> Issue Num : ${issue.number} </p>  <span id='issue-title'> Issue type :</span> ${issue.title} </span> <hr></hr> </ol>`}).join('')  
}
GetDataFrom_API()


function Increment(){
    count = count + 1
    document.getElementById('pageNumber').innerHTML = `Page Number ${ count }`
}

function Decrement(){
    count > 1 ? count = count -1 : window.alert('Page Number Starts from 1')
    document.getElementById('pageNumber').innerHTML = `Page Number ${ count }`
}