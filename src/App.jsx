import { Profile } from './Profile/Profile';
import user from './data/user.json';
import { Statistics } from './Statistics/Statistics';
import data from './data/data.json';
import { Friends } from './Friends/FriendList';
import { TransactionHistory } from './Transaction/Transaction';
import { Theme } from './App.styled';

export default function App() {
  return (
    <Theme>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <section>
        <Statistics title="Upload stats" stats={data} />
      </section>
      <Friends />
      <TransactionHistory />
    </Theme>
  );
}
