const SurName = document.registation.surname
const GivenName = document.registation.givenname
const Title = document.registation.title
const Gender = document.registration.gender
const Date = document.registation.date
const Country = document.registration.country
const PlaceOfResidence = document.registation.Placeofresidence
const Nationality = document.registation.Nationality

const checkSurName = () => {
    let SurNameCheck = /^[A-Za-z]+$/
    let SurNameCheck2 = /^(?=.*\d)(?=.*[A-Z]).{1,16}$/

    if(SurName.value === "") {
        SurName.style.border = '2px solid red'
    } 

    if(SurName.value.match(SurNameCheck2)) {
        SurName.style.border = '2px solid green'
    } else {
        SurName.style.border = '2px solid green'
    }
}

const checkGivenName = () => {
    let givennameCheck = /^[A-Za-z]+$/
    let givennameCheck2 = /^(?=.*\d)(?=.*[A-Z]).{1,16}$/

    if(givenname.value === "") {
        givenname.style.border = '2px solid red'
    } 

    if(givenname.value.match(givennameCheck2)) {
        givenname.style.border = '2px solid green'
    } else {
        givenname.style.border = '2px solid green'
    }
} 
