import { useSelector } from "react-redux"
import { useEffect, useState } from "react"
import './cart.css'
import { Link } from 'react-router-dom'


export default () => {

    let [total, setTotal] = useState(0)


    let product = useSelector((store) => {
        return store.FirstSection.currentProduct
    })


    return (
        <div class="container">
            <div class="wrapper wrapper-content animated fadeInRight">
                <div class="row">
                    <div class="col-md-9">
                        <div class="ibox">
                            <div class="ibox-title">
                                <span class="pull-right">(<strong>{product.length}</strong>) items</span>
                                <h5>Items in your cart</h5>
                            </div>
                            <ol className="cartWaliList">
                                {
                                    product.map((ad) => {
                                        return <li>
                                            <div class="ibox-content">
                                                <div class="table-responsive">
                                                    <table class="table shoping-cart-table">
                                                        <tbody>
                                                            <tr>
                                                                <td width="90">
                                                                    <div class="cart-product-imitation">
                                                                    </div>
                                                                </td>
                                                                <td class="desc">
                                                                    <h3>
                                                                        <a class="text-navy">
                                                                            {ad.name}
                                                                        </a>
                                                                    </h3>

                                                                    <dl class="small m-b-none">
                                                                        <dt>Description lists</dt>
                                                                        <dd>{ad.description}</dd>
                                                                    </dl>

                                                                    <div class="m-t-sm">
                                                                        <span class="text-muted"><i class="fa fa-gift"></i> Add gift package</span>
                                                                        |
                                                                        <span class="text-muted"><i class="fa fa-trash"></i> Remove item</span>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    ${ad.price}

                                                                </td>
                                                                <td width="65">
                                                                    <input type="text" class="form-control" placeholder="1" />
                                                                </td>
                                                                <td>
                                                                    <h4>
                                                                        ${ad.price}
                                                                    </h4>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </li>
                                    })
                                }
                            </ol>

                            <div class="ibox-content">
                                <button class="btn btn-primary pull-right"><i class="fa fa fa-shopping-cart"></i> Checkout</button>
                                <Link to='/launch'>
                                    <button class="btn btn-white"><i class="fa fa-arrow-left"></i> Continue shopping</button>
                                </Link>
                            </div>
                        </div>

                    </div>
                    <div class="col-md-3">
                        <div class="ibox">
                            <div class="ibox-title">
                                <h5>Cart Summary</h5>
                            </div>
                            <div class="ibox-content">
                                <span>
                                    Total
                                </span>
                                <h2 class="font-bold">
                                    ${total}
                                </h2>

                                <hr />

                                <div class="m-t-sm">
                                    <div class="btn-group">
                                        <a class="btn btn-primary btn-sm"><i class="fa fa-shopping-cart"></i> Checkout</a>
                                        <a class="btn btn-white btn-sm"> Cancel</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="ibox">
                            <div class="ibox-title">
                                <h5>Support</h5>
                            </div>
                            <div class="ibox-content text-center">
                                <h3><i class="fa fa-phone"></i> +11 111 111 111</h3>
                                <span class="small">
                                    Please contact with us if you have any questions. We are avalible 24h.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}