import React from 'react'
import styled from 'styled-components'

const IconContainer = styled.div`
	display: flex;
`
const IconImage = styled.img`
	margin-right: 5px;
`

export function IconeComContador(props) {
	return <IconContainer>
		<IconImage alt={'Icone'} src={props.icone} onClick={props.onClickIcone}/>
		<p>{props.valorContador}</p>
	</IconContainer>
}

// export class IconeComContador extends React.Component {
// 	state = {
// 		valorContador: ""
// 	}

// 	onChangeValorContador = (event) => {
// 		this.setState({valorContador: event.target.value})
// 	}


// 	render () {
// 		return <IconContainer>
// 		<IconImage alt={'Icone'} src={this.icone} onClick={this.onClickIcone}/>
// 		<p>{this.valorContador}</p>
// 	</IconContainer>
// 	}
// }
