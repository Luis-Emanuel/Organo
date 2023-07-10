import './ListaSuspensa.css';

const ListaSuspensa = (props) => {
  return (
    <div className='lista-suspensa'>
      <label>{props.label}</label>
      <option value=''></option>
      <select onChange={evento => props.aoAlterar(evento.target.value)} value={props.valor} required={props.obrigatorio}>
        {props.itens.map(item => <option key={item}>{item}</option>)}
      </select>
    </div>
  )
}

export default ListaSuspensa;