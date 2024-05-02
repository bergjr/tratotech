import React, { useEffect } from 'react'
import styles from './Busca.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { mudarBusca, resetarBusca } from 'store/reducers/busca';

export default function Busca() {
  const busca = useSelector((state: any) => state.busca)
  const dispatcher = useDispatch()
  const location = useLocation()
  useEffect(() => {
    dispatcher(resetarBusca())
  }, [location.pathname, dispatcher])
  return (
    <div className={styles.busca}>
      <input className={styles.input}
      placeholder='O que você procura?' 
      value={busca}
      onChange={e => dispatcher(mudarBusca(e.target.value))}
      />
    </div>
  )
}
