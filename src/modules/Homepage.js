import React from 'react';
import { Link } from 'react-router-dom';
import { LoginContext } from '../contexts/LoginContext';
import { useContext } from 'react';

function Homepage() {

    const {isLoggedIn,loggedInUser} = useContext(LoginContext);
    const loggedInDetails = {
        ccNumber: loggedInUser.ccNumber,
        ccName: loggedInUser.ccName,
        userName: loggedInUser.userName,
        userId: loggedInUser.userId,
        availableRedeemPoints: loggedInUser.availableRedeemPoints,
        totalRewardsGained: loggedInUser.totalRewardsGained
    }

    /**
     * Replace the above login details with details from LoginContext
     * 
     */

    return (
        <div className="homepage container">
            <h2>Welcome to SmartBank credit card</h2>

            <div className="user-detail">

                {
                    isLoggedIn ?
                        (
                            <div>

                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>Credit Card Number</th>
                                            <th>Card Name</th>
                                            <th>User Name</th>
                                            <th>Available Points</th>
                                            <th>Total Rewards Gained (<i className="fas fa-rupee-sign"></i>)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{loggedInUser.ccNumber}</td>
                                            <td>{loggedInUser.ccName}</td>
                                            <td>{loggedInUser.userName}</td>
                                            <td>{loggedInUser.availableRedeemPoints}</td>
                                            <td>{loggedInUser.totalRewardsGained}</td>
                                        </tr>
                                    </tbody>



                                </table>

                            </div>
                        ) :
                        (
                            <div className="mt-5">
                                Please Sign in to redeem your points. &nbsp; &nbsp;
                                <Link className="btn btn-primary" to="/login">
                                    <i className="fas fa-user" />&nbsp; Sign in

                                </Link>
                            </div>
                        )
                }


            </div>
        </div>
    );
}

export default Homepage; 