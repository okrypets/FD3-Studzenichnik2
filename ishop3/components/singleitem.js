import React from 'react';
import PropTypes from 'prop-types';

import './singleitem.css';

class SingleItem  extends React.Component {
    static propTypes = {
        itemStock: PropTypes.number,
        itemPrice: PropTypes.number,
        expert: PropTypes.string,
        itemName: PropTypes.string,
        itemImg: PropTypes.string,
        code: PropTypes.number,
        cbEditeItem: PropTypes.func,
        cbisValidInputItem: PropTypes.func,
        cbChangedVoteitemName: PropTypes.func,
        cbChangedVoteExpert: PropTypes.func,
        cbChangedVoteImage: PropTypes.func,
        cbChangedVotePrice: PropTypes.func,
        cbChangedVoteStock: PropTypes.func,
        cbChangeWorkmodeonCalcel: PropTypes.func,

        selectedSingleItem: PropTypes.arrayOf(
            PropTypes.shape({
                code: PropTypes.number.isRequired,
                itemImg: PropTypes.string.isRequired,
                itemName: PropTypes.string.isRequired,
                expert:PropTypes.string.isRequired,
                itemPrice:PropTypes.number.isRequired,
                itemStock:PropTypes.number.isRequired,
            })
        ), // - выбранный товар
        selectedItemCode:PropTypes.number,
        /*for validation*/
        ValuechangedNameItemText: PropTypes.string,
        ValuechangedItemExpert: PropTypes.string,
        ValuechangedItemImage: PropTypes.string,
        ValuechangedItemPrice: PropTypes.number,
        ValuechangedItemStock: PropTypes.number,

        //isSingleItemAnyChange: PropTypes.boolen,
        addItemnewCode: PropTypes.number,

        editedItemCode: PropTypes.number,
        startWorkmode: PropTypes.number,   //* 1 - карточка товара, 2 - Редактирование, 3 - Добавление нового товара*/

        WarrValidString: PropTypes.string.isRequired, //string
        WarrValidNumber: PropTypes.string.isRequired, //number > 0
        WarrValidURL: PropTypes.string.isRequired, //url
        WarrValidInteger: PropTypes.string.isRequired, //number Integer
    };

    voteitemName = (EO) => {
        this.props.cbChangedVoteitemName(EO.target.value);
    };
    voteitemExpert = (EO) => {
        this.props.cbChangedVoteExpert(EO.target.value);
    };
    voteitemImage = (EO) => {
        this.props.cbChangedVoteImage(EO.target.value);
    };
    voteitemPrice = (EO) => {
        this.props.cbChangedVotePrice(+EO.target.value);
    };
    voteitemStock = (EO) => {
        this.props.cbChangedVoteStock(+EO.target.value);
    };

    cancelEdit = () => {
        this.props.cbChangeWorkmodeonCalcel();
    };

    saveEdit =() => {
        this.props.cbSaveEditItem();
    };

    saveNEW = () => {
        this.props.cbSaveAddItem();
    };

    render() {
        if ( this.props.startWorkmode===1 ) {
            return (
                <div className = 'CatBlockSingleItem'>
                    <h2 className= 'SingleItemTitle'>
                        {this.props.ValuechangedNameItemText}
                    </h2>
                    <div><span>id:</span> {this.props.selectedItemCode} </div>
                    <div><span>Description:</span> {this.props.ValuechangedItemExpert}</div>
                    <div><span>Image:</span> {this.props.ValuechangedItemImage}</div>
                    <div><span>Price:</span> {this.props.ValuechangedItemPrice}</div>
                    <div><span>Stock:</span> {this.props.ValuechangedItemStock}</div>
                </div>
            );
        } else if ( this.props.startWorkmode===2 || this.props.startWorkmode===3 ) {
            return (
                <div className = 'CatBlockSingleItem'>
                    <h2 className= 'SingleItemTitle'>
                        {this.props.startWorkmode===2 ? 'Edit existing Product' : 'Add New Product'}
                    </h2>
                    <div><span>id:</span> {this.props.startWorkmode===3 ? this.props.addItemnewCode : this.props.selectedItemCode}</div>
                    <div>
                        <span>Product Name:</span> <input type='text' onChange={this.voteitemName} value={this.props.ValuechangedNameItemText} />
                        {
                            (!this.props.ValuechangedNameItemText) &&
                            <em>{this.props.WarrValidString}</em>
                        }
                    </div>
                    <div>
                        <span>Description:</span> <input type='text' onChange={this.voteitemExpert} value={this.props.ValuechangedItemExpert} />
                        {
                            (!this.props.ValuechangedItemExpert) &&
                            <em>{this.props.WarrValidString}</em>
                        }
                    </div>
                    <div>
                        <span>Image:</span> <input type='text' onChange={this.voteitemImage} value={this.props.ValuechangedItemImage} />
                        {
                            (!this.props.ValuechangedItemImage) &&
                            <em>{this.props.WarrValidURL}</em>
                        }
                    </div>
                    <div>
                        <span>Price:</span> <input type='text' onChange={this.voteitemPrice}  value={`${this.props.ValuechangedItemPrice}`} />
                        {
                            (!this.props.ValuechangedItemPrice) &&
                            <em>{this.props.WarrValidNumber}</em>
                        }
                    </div>
                    <div>
                        <span>Stock:</span> <input type='text' onChange={this.voteitemStock}  value={`${this.props.ValuechangedItemStock}`} />
                        {
                            (!this.props.ValuechangedItemStock) &&
                            <em>{this.props.WarrValidInteger}</em>
                        }
                    </div>
                    <div className='buttonBlock'>
                        <input
                            type = 'button'
                            value = {this.props.startWorkmode===2 ? 'Save' : 'Add' }
                            onClick = {this.props.startWorkmode===2 ? this.saveEdit : this.saveNEW }
                            disabled={
                                (!this.props.ValuechangedItemStock) ||
                                (!this.props.ValuechangedItemPrice) ||
                                (!this.props.ValuechangedItemImage) ||
                                (!this.props.ValuechangedItemExpert) ||
                                (!this.props.ValuechangedNameItemText)
                            }
                        />
                        <input
                            type = 'button'
                            value = 'Cancel'
                            onClick = {this.cancelEdit}
                        />
                    </div>
                </div>
                );
        } /*else if ( this.props.startWorkmode===3 ) {
            return (
                <div className = 'CatBlockSingleItem'>
                    <h2 className= 'SingleItemTitle'>
                        Add New Product
                    </h2>
                    <div><span>id:</span> {this.props.code}</div>
                    <div>
                        <span>Product Name:</span> <input type='text' onChange={this.voteitemName} value={this.props.ValuechangedNameItemText} />
                        {
                            (!this.props.ValuechangedNameItemText) &&
                            <em>{this.props.WarrValidString}</em>
                        }
                    </div>
                    <div>
                        <span>Description:</span> <input type='text' onChange={this.voteitemExpert} value={this.props.ValuechangedItemExpert} />
                        {
                            (!this.props.ValuechangedItemExpert) &&
                            <em>{this.props.WarrValidString}</em>
                        }
                    </div>
                    <div>
                        <span>Image:</span> <input type='text' onChange={this.voteitemImage} value={this.props.ValuechangedItemImage} />
                        {
                            (!this.props.ValuechangedItemImage) &&
                            <em>{this.props.WarrValidURL}</em>
                        }
                    </div>
                    <div>
                        <span>Price:</span> <input type='text' onChange={this.voteitemPrice}  value={`${this.props.ValuechangedItemPrice}`} />
                        {
                            (!this.props.ValuechangedItemPrice) &&
                            <em>{this.props.WarrValidNumber}</em>
                        }
                    </div>
                    <div>
                        <span>Stock:</span> <input type='text' onChange={this.voteitemStock}  value={`${this.props.ValuechangedItemStock}`} />
                        {
                            (!this.props.ValuechangedItemStock) &&
                            <em>{this.props.WarrValidInteger}</em>
                        }
                    </div>
                    <div className='buttonBlock'>
                        <input
                            type = 'button'
                            value = 'Save'
                            onClick = {this.saveEdit}
                            disabled={
                                (!this.props.ValuechangedItemStock) ||
                                (!this.props.ValuechangedItemPrice) ||
                                (!this.props.ValuechangedItemImage) ||
                                (!this.props.ValuechangedItemExpert) ||
                                (!this.props.ValuechangedNameItemText)
                            }
                        />
                        <input
                            type = 'button'
                            value = 'Cancel'
                            onClick = {this.cancelEdit}
                        />
                    </div>
                </div>
            );
        }*/ else {
            return null;
        }
    }
}
export default SingleItem;