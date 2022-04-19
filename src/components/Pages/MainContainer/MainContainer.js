import React from 'react';
import { useState, useEffect } from 'react';
import { getFirestore, query, collection, getDocs } from 'firebase/firestore';
import Header from '../../Header/Header';
import Title from '../../Title/Title';
import CategoryCard from '../../CategoryCard/CategoryCard';
import PageLoader from '../../PageLoader/PageLoader';
import ItemList from '../../ItemList/ItemList';
import InfoItem from '../../InfoItem/InfoItem';
import './_MainContainer.css';

function MainContainer() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const dataBase = getFirestore()
        const queryCollection = query(collection(dataBase, 'items'))
        getDocs(queryCollection)
            .then(res => setData(res.docs.map(prod => ({id: prod.id, ...prod.data()}))))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, [])

    return (
        <>
            <Header text={'Personalizá a tu estilo'}/>
                <section className='categoriesContainer'>
                    <Title text='Productos destacados'/>
                    <div className='categories'>
                        <CategoryCard link='tazas' text='Tazas' />
                        <CategoryCard link='mochilas y bolsos' text='Mochilas y bolsos' />
                        <CategoryCard link='termos y mates' text='Termos y mates' />
                    </div>
                </section>
                <main className='mainContainer'>
                    <Title text='Catálogo'/>
                    {loading
                    ? <PageLoader />
                    : <ItemList products={data}/>}
                </main>
                <section className='infoItemsContainer'>
                    <div className='infoItems'>
                        <InfoItem span='fas fa-lightbulb' p='Comentanos tu idea Explora los estilos más recientes' />
                        <InfoItem span='fab fa-product-hunt' p='Los mejores materiales para la sublimación y productos de calidad' />
                        <InfoItem span='fas fa-clock' p='Tu producto en minutos Elegilo y lo sublimamos en el acto' />
                    </div>
                </section>
        </>
    )
}

export default MainContainer;