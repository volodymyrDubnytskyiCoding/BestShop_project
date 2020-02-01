document.addEventListener('DOMContentLoaded', function () {
    // basic
    const body = document.querySelector("body");
    // inputs " Calculate how much you’ll pay "
    const quantity = document.querySelector("#quantity");
    const inMonth = document.querySelector("#inMonth");
    const select = document.querySelector("#package");
    const submit = document.querySelector("#submit");
    const form = document.querySelector(".calculate-form");
    const calculateBoxInputs = document.querySelector(".calculate-box-inputs");
    // boxes where is will be sum of input value
    // oreders price
    const orders = document.querySelector(".orders");
    const ordersCalculate = document.querySelector(".ordersCalculate");
    const ordersSum = document.querySelector(".ordersSum");
    // select package price
    const selectPackage = document.querySelector(".selectPackage");
    const selectPackageCalculate = document.querySelector(".selectPackageCalculate");
    const selectPackageSum = document.querySelector(".selectPackageSum");
    // accounting price
    const accountingEl = document.querySelector(".accounting");
    const accountingSum = document.querySelector(".accountingSum");
    // terminal price
    const terminalEl = document.querySelector(".terminal");
    const terminalSum = document.querySelector(".terminalSum");
    // span
    const newElSpan = document.querySelector(".for-new-el");
    // else
    const spantTotal = document.querySelector(".spant-total-btn");
    const perProduct = 0.5;
    const perDay = 0.25;
    const accounting = 35;
    const terminal = 5;




    quantity.addEventListener('keyup', function () {
        if (quantity.value === '' || quantity.value === null || quantity.value === undefined || quantity.value <= 0) {
            valueProducts.style.display = 'none';
            newElSpan.innerText = '$' + 0;
        } else {
            valueProducts.style.display = 'flex';
            const sumQuantity = quantity.value * perProduct;
            products.innerText = "Products";
            productsCalculate.innerText = quantity.value + " " + "*" + " " + perProduct;
            productsSum.innerText = "$ " + sumQuantity;
            newElSpan.innerText = sumQuantity;
        }
        

    })
    inMonth.addEventListener('keyup', function () {
        if (inMonth.value === '' || inMonth.value === null || inMonth.value === undefined || inMonth.value <= 0) {
            valueOrders.style.display = 'none';
        } else {
            valueOrders.style.display = 'flex';
            const suminMonth = inMonth.value * perDay;
            orders.innerText = "Orders";
            ordersCalculate.innerText = inMonth.value + " " + "*" + " " + perDay;
            ordersSum.innerText = "$" + suminMonth;
            let sumOfTotal = newElSpan.innerText;
            newElSpan.innerText = newElSpan.innerText.parseInt(text, 10);

        }
    })



    // select.addEventListener('change', function () {
    //     console.log('do');
    //     let count = 0;

    //     if (select.value === "professional") {
    //         count = 25;
    //     } else if (select.value === 'premium') {
    //         count = 60;
    //     }
    //     valuePackage.style.display = 'flex';
    //     selectPackage.innerText = 'Package';
    //     selectPackageCalculate.innerText = select.value.charAt(0).toUpperCase() + select.value.slice(1);
    //     selectPackageSum.innerText = " $ " + count;
    // })

    select.addEventListener('click', function () {
        if (select.className === 'selcet-package selcet-package-activ-arrow') {
            select.classList.remove('selcet-package-activ-arrow');
            let boxRemove = document.querySelector(".select-option-custome");
            boxRemove.remove();
        } else {
            select.classList.add('selcet-package-activ-arrow');
            let box = document.createElement('div');
            box.classList.add('select-option-custome');
            let span1 = document.createElement('span');
            span1.classList.add('span-select');
            span1.innerText = 'Basic';
            let span2 = document.createElement('span');
            span2.classList.add('span-select');
            span2.innerText = 'Professional';
            let span3 = document.createElement('span');
            span3.classList.add('span-select');
            span3.innerText = 'Premium';
            box.appendChild(span1);
            box.appendChild(span2);
            box.appendChild(span3);
            calculateBoxInputs.appendChild(box);
            let spanClick = [span1, span2, span3];

            for (const el of spanClick) {
                el.addEventListener('click', function (e) {
                    let boxRemove = document.querySelector(".select-option-custome");
                    if (e.currentTarget === span1) {
                        select.value = "basic";
                        boxRemove.remove();
                         select.classList.remove('selcet-package-activ-arrow');
                    } else if (e.currentTarget === span2) {
                        select.value = 'professional';
                        boxRemove.remove();
                         select.classList.remove('selcet-package-activ-arrow');
                    } else if (e.currentTarget === span3)
                        select.value = 'premium'
                        boxRemove.remove();
                         select.classList.remove('selcet-package-activ-arrow');

                    if (select.value === "professional") {
                        count = 25;
                    } else if (select.value === 'premium') {
                        count = 60;
                    } else if( select.value === 'basic'){
                        count = 0;
                    }
                    valuePackage.style.display = 'flex';
                    selectPackage.innerText = 'Package';
                    selectPackageCalculate.innerText = select.value.charAt(0).toUpperCase() + select.value.slice(1);
                    selectPackageSum.innerText = " $ " + count;
                })
            }


        }

    })


    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const sumQuantity = quantity.value * perProduct;
        products.innerText = "Products";
        productsCalculate.innerText = quantity.value + " " + "*" + " " + perProduct;
        productsSum.innerText = "$ " + sumQuantity;


        const suminMonth = inMonth.value * perDay;
        orders.innerText = "Orders";
        ordersCalculate.innerText = inMonth.value + " " + "*" + " " + perDay;
        ordersSum.innerText = "$" + suminMonth;


        // select section
        let count = 0;

        if (select.value === "professional") {
            count = 25;
        } else if (select.value === 'premium') {
            count = 60;
        }
        selectPackage.innerText = 'Package';
        selectPackageCalculate.innerText = select.value.charAt(0).toUpperCase() + select.value.slice(1);
        selectPackageSum.innerText = " $ " + count;


        // checkbox section
        if (checkboxAccounting.checked) {
            accountingEl.innerText = " Accounting";
            accountingSum.innerText = " $ " + accounting;
        }
        if (checkboxRental.checked) {
            terminalEl.innerText = " Terminal";
            terminalSum.innerText = " $ " + terminal;
        }
        // submit total section

        let submitSum = sumQuantity + suminMonth + count + accounting + terminal;
        newElSpan.innerText = "$" + submitSum;
        // if( newSpanTotal.innerText === )


        // submit.innerText = spantTotal.innerText + " $" + newElSpan;


    });
});