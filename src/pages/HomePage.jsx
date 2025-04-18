import React from 'react'

import SideNav from '../components/HomePageComponents/SideNav'
import Categories from '../components/HomePageComponents/Categories'
import Delivery from '../components/Delivery'


export default function HomePage() {
    return (
        <div>
            <SideNav/>
            <Categories/>
            <Delivery/>
        </div>
    )
}
