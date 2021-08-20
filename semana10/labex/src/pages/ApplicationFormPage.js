import axios from 'axios'
import { React } from 'react'
import { useHistory } from 'react-router-dom'
import { baseUrl } from '../constants/url'
import useForm from '../hooks/useForm'
import { MainContainer, HeaderContainer, ButtonContainer, FormContainer } from '../styles/Styled'

export const ApplicationFormPage = () => {
    const history = useHistory()

    const { form, onChange } = useForm({ name: "", age: "", applicationText: "", profession: "", country: "" })

    const countryList = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua &amp; Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia &amp; Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Cape Verde", "Cayman Islands", "Chad", "Chile", "China", "Colombia", "Congo", "Cook Islands", "Costa Rica", "Cote D Ivoire", "Croatia", "Cruise Ship", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "French West Indies", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Kyrgyz Republic", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Mauritania", "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Namibia", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Pierre &amp; Miquelon", "Samoa", "San Marino", "Satellite", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "South Africa", "South Korea", "Spain", "Sri Lanka", "St Kitts &amp; Nevis", "St Lucia", "St Vincent", "St. Lucia", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor L'Este", "Togo", "Tonga", "Trinidad &amp; Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks &amp; Caicos", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "Uruguay", "Uzbekistan", "Venezuela", "Vietnam", "Virgin Islands (US)", "Yemen", "Zambia", "Zimbabwe"];

    const goBack = () => {
        history.goBack()
    }

    const goHome = () => {
        history.push("/")
    }

    const applyTotrip = (event, id) => {
        event.preventDefault()

        axios.post(`${baseUrl}/trips/${id}/apply`, form)
            .then(() => {
                alert("Solicitação enviada!")
                    ({ setName: "", setAge: "", setApplicationText: "", setProfession: "", setCountry: "" })
            })
            .catch((err) => {

            })
    }

    return (
        <MainContainer>
            <HeaderContainer>
                <h1 onClick={goHome}>LabeX</h1>
            </HeaderContainer>
            <ButtonContainer>
                <button onClick={goBack}>
                    VOLTAR
                </button>
            </ButtonContainer>
            <FormContainer onSubmit={applyTotrip}>
                <input
                    name="name"
                    placeholder="NOME"
                    value={form.name}
                    onChange={onChange}
                ></input>
                <input
                    name="age"
                    placeholder="IDADE"
                    value={form.age}
                    onChange={onChange}
                ></input>
                <input
                    name="profession"
                    placeholder="PROFISSÃO"
                    value={form.profession}
                    onChange={onChange}
                ></input>
                <input
                    name="applicationText"
                    placeholder="DESCREVA A SUA MOTIVAÇÃO PARA ESSA VIAGEM"
                    value={form.applicationText}
                    onChange={onChange}
                ></input>
                <select
                    name="country"
                    placeholder="PAÍS DE ORIGEM"
                    value={form.country}
                    onChange={onChange}
                >
                    <option value={""} disabled>PAÍS DE ORIGEM</option>
                    {countryList.map((country) => {
                        return (
                            <option value={country} key={country}>{country}</option>
                        )
                    })}
                </select>
                <button>ENVIAR</button>
            </FormContainer>
        </MainContainer>
    )
}