'use strict';

const productQuantityEls = document.getElementsByClassName('product__quantity');

for (const productQuantityEl of productQuantityEls)
    productQuantityEl.addEventListener('click', (event) => {
        const {target} = event;
        const productQuantityValueEl = target.closest('.product__quantity')
            .getElementsByClassName('product__quantity-value')[0];

    //  Если нажали на увеличить/уменьшить количество товара.
        if (target.classList.contains('product__quantity-control')) {
            if (target.classList.contains('product__quantity-control_dec'))
                if (productQuantityValueEl.textContent.trim() === '1') return;
                else productQuantityValueEl.textContent--;
            else if (target.classList.contains('product__quantity-control_inc'))
            productQuantityValueEl.textContent++;
        }

    //  Если нажали на кнопку "Добавить в корзину".
        else if (target.classList.contains('product__add')) {
            const productEl = target.closest('.product');
        //  Ищем добавляемый товар в корзине.
            const cartProductEl = Array.from(document.getElementsByClassName('cart__product'))
                .find(cartProductEl => cartProductEl.dataset.id === productEl.dataset.id);

            if (cartProductEl) {
                cartProductEl.getElementsByClassName('cart__product-count')[0].textContent =
                    Number(cartProductEl.getElementsByClassName('cart__product-count')[0]
                    .textContent) + Number(productQuantityValueEl.textContent);

        //  Если в корзине товара нет, то добавляем его.
            } else {
                const cartProductsEl = document.getElementsByClassName('cart__products')[0];
                cartProductsEl.insertAdjacentHTML('beforeend', `
                    <div class="cart__product" data-id="${productEl.dataset.id}">
                        <img class="cart__product-image" src="${productEl.getElementsByClassName('product__image')[0].src}">
                        <div class="cart__product-count">${productQuantityValueEl.textContent}</div>
                        <a href="#" class="cart__product__remove">&times;</a>
                    </div>
                `);

                document.getElementsByClassName('cart')[0].classList.add('cart_active');

            //  Добавляем возможность удаления товара из корзины.
                const cartProductRemoveEl = cartProductsEl.lastElementChild.getElementsByClassName('cart__product__remove')[0];
                cartProductRemoveEl.addEventListener('click', () => {
                    cartProductRemoveEl.closest('.cart__product').remove();
                    if (cartProductsEl.children.length === 0)
                        document.getElementsByClassName('cart')[0].classList.remove('cart_active');
                });
            }
        }
    });
