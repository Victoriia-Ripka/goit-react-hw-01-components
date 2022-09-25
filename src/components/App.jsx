import React from 'react';
import user from '../data/user.json';
import { Profile  } from './profile/Profile';
import data from '../data/data.json';
import { Statistics } from './statistics/Statistics'
import friends from "../data/friends.json";
import { FriendList } from './friends/Friends'
import transactions from "../data/transactions.json";
import { TransactionHistory } from './history/TransactionHistory'


export const App = () => {
    return (
      <>
        <Profile 
          username={user.username}
          avatar={user.avatar}
          location={user.location}
          stats={user.stats}
          tag={user.tag}
        />

        <Statistics title="Upload stats" stats={data} />
        <Statistics stats={data} />

        <FriendList friends={friends} />

        <TransactionHistory items={transactions} />
      </>
    );
};
