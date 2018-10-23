import React from 'react';
import { mount, render, configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import { waitForState, waitForElement } from 'enzyme-async-helpers';
import axios from 'axios';

import Entry from '../../src/app_entry'
import Restaurant from '../../src/Restaurant'
import { Typography } from '@material-ui/core';

//レストラン検索画面(コンテナ)
describe('Resutaurants Components Container', ()=>{
    it('has no restaurants when just been initialized', ()=>{
        //初期表示時には1個もないはず
        const entryWrapper = shallow(<Entry />)
        expect(entryWrapper.find(Restaurant).length).toBe(0)
    })
})

//レストランの表示部分
describe('Restaurant Component', ()=>{
    const sampleRest = {
        name: "おいしいレストラン",
        url: "https://google.co.jp",
        image_url: {
            shop_image1: ""
        },
        pr: {
            pr_short: "おいしさあふれるぞい"
        },
        category_name_l: "定食",
        lunch: "700"
    }

    //レストランの名前を出す
    it('can show name', ()=>{
        const wrapper = shallow(<Restaurant info={sampleRest} />)
        expect(wrapper.find(Typography).exists()).toBeTruthy()
    })
})