"use strict";

import React from 'react';
import renderer from 'react-test-renderer';

import MobileCompany from '../components/MobileCompany';

describe('MobileCompany-test', () => {
    xit('is ADD button is', () => {

        // создаём тестовую версию компонента
        const component = renderer.create(
            <MobileCompany />
        );

        // получаем снэпшот (HTML-снимок) компонента для сверки, что вёрстка не испортилась
        let componentTree=component.toJSON();
        expect(componentTree).toMatchSnapshot();

        /*-----------Проверяем наличие и работу кнопки Add ------------*/

        // найдём в вёрстке компонента кнопку type = button with className = add
        //const buttonAdd = component.root.find( el => (el.type ==='input' && el.class ==='add') /*&& el.props.aaa == 'bbb'*/ );
        const buttonAdd = component.root
            .find(
                (el) =>
                    el.type === 'input'
                    && el.props.type === 'button'
                    && el.props.className === 'add'
            );
        // и "нажмём" на неё
        buttonAdd.props.onClick();
        const buttonEditClicked = jest.fn();
        simulatePresses(buttonEditClicked);
        expect(buttonEditClicked).toBeCalledWith(
            expect.objectContaining({
                id: expect.any(Number),
                fam: expect.any(String),
                im: expect.any(String),
                otch: expect.any(String),
                balance: expect.any(Number),
                }),
            );

        //expect(component.root.find(el => el.props.className === 'SingleMobileClientEdit')).toBeInstanceOf('SingleMobileClientEdit');


        /*---------Вызываем функцию buttonAddClicked
        const onPressAddButton = jest.fn();
        simulatePresses(onPressAddButton);

        buttonAdd.simulate('change', {
            target: { value: "hello" },
        });

*/
        // получаем уже изменённый снэпшот
        componentTree=component.toJSON();
        expect(componentTree).toMatchSnapshot();

        /*
        //Проверяем наличие блока с классом SingleMobileClientEdit
        const ADDEditComponent = component.root
            .find(
                (el) => el.type === 'div'
                    && el.props.className === 'SingleMobileClientEdit'
            );
        expect(ADDEditComponent).toMatchObject('.SingleMobileClientEdit');

        // получаем уже изменённый снэпшот
        componentTree=component.toJSON();
        expect(componentTree).toMatchSnapshot();
*/

    });


});