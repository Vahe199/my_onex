import React from "react";
import '../../Styles/MainPages.scss'
import export_usa from '../../IMAGE/export_usa.jpg'
import export_rus from '../../IMAGE/export_rus.jpg'
import docs from '../../IMAGE/docs.svg'

export const MainPage = () => {
    return(
        <div className={'mainPage'}>
            <div className={'card'}>
                <img src={export_usa}/>
                <h3>Արտահանում ՀՀ-ից դեպի ԱՄՆ</h3>
            </div>
            <div className={'card'}>
                <img src={export_rus}/>
                <h3>Արտահանում ՀՀ-ից դեպի Ռուսաստան</h3>
            </div>
            <div className={'card'}>
                <img src={export_usa}/>
                <h3>Փաստաթղթերի առաքում ՀՀ-ից դեպի աշխարհի ցանկացած կետ</h3>
            </div>
        </div>
    )
}
