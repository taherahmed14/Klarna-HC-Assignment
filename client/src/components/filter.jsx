export const Filter = ({ handleCheckBoxType, handleCheckBoxDiscount, handleAll, handleClothing, 
    handleAccessories, handleBeauty, handleHouseHold }) => {
    return(
        <div id="filterCont">
            <div className="categoryBox">
                <h3>Categories</h3>
                <button onClick={handleAll}>All</button>
                <button onClick={handleClothing}>Clothing & Apparel</button>
                <button onClick={handleAccessories}>Computers & Accessories</button>
                <button onClick={handleBeauty}>Health & Beauty</button>
                <button onClick={handleHouseHold}>Household</button>
            </div>

            <div className="filterBox">
                <h3>Filter</h3>
                <h4>Type</h4>
                <input type="checkbox" value="Only Coupons" onChange={handleCheckBoxType} />
                <label>Only Coupons</label> <br/>
                <input type="checkbox" value="Exclusives" onChange={handleCheckBoxType} />
                <label>Exclusives</label> <br/>
                <input type="checkbox" value="BOGO and more" onChange={handleCheckBoxType} />
                <label>BOGO and more</label>
            </div>

            <div className="filterBox">
                <h4>Discount</h4>
                <input type="checkbox" value="50-80% off" onChange={handleCheckBoxDiscount} />
                <label>0-49% off</label> <br/>
                <input type="checkbox" value="0-49% off" onChange={handleCheckBoxDiscount} />
                <label>50-80% off</label> <br/>
            </div>
        </div>
    )
};