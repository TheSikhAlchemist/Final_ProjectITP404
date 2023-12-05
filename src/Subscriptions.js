import React, { useState, useEffect } from 'react';
import data from './db.json';

function SubscriptionApp() {
  const [subscriptions, setSubscriptions] = useState([]);
  const [newSubscription, setNewSubscription] = useState({
    username: '',
    email: '',
    fullName: '',
    subscriptionType: '',
  });

  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedSubscription, setSelectedSubscription] = useState(null);

  useEffect(() => {
    setSubscriptions(data.subscriptions);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewSubscription({ ...newSubscription, [name]: value });
  };

  const addSubscription = () => {
    setSubscriptions([...subscriptions, newSubscription]);
    setNewSubscription({
      username: '',
      email: '',
      fullName: '',
      subscriptionType: '',
    });
  };

  const deleteSubscription = (id) => {
    const updatedSubscriptions = subscriptions.filter(
      (subscription) => subscription.id !== id
    );
    setSubscriptions(updatedSubscriptions);
  };

  const editSubscription = (subscription) => {
    setSelectedSubscription(subscription);
    setIsEditMode(true);
    setNewSubscription({ ...subscription });
  };

  const updateSubscription = () => {
    const updatedSubscriptions = subscriptions.map((subscription) => {
      if (subscription.id === selectedSubscription.id) {
        return { ...subscription, ...newSubscription };
      }
      return subscription;
    });
    setSubscriptions(updatedSubscriptions);
    setIsEditMode(false);
    setSelectedSubscription(null);
    setNewSubscription({
      username: '',
      email: '',
      fullName: '',
      subscriptionType: '',
    });
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Subscriptions</h1>
      <ul style={styles.list}>
        {subscriptions.map((subscription) => (
          <li key={subscription.id} style={styles.subscriptionItem}>
            <strong>Username:</strong> {subscription.username}
            <br />
            <strong>Email:</strong> {subscription.email}
            <br />
            <strong>Full Name:</strong> {subscription.fullName}
            <br />
            <strong>Subscription Type:</strong> {subscription.subscriptionType}
            <br />
            <button onClick={() => deleteSubscription(subscription.id)}>
              Delete
            </button>
            <button onClick={() => editSubscription(subscription)}>
              Update
            </button>
          </li>
        ))}
      </ul>

      {isEditMode && selectedSubscription && (
        <div style={styles.form}>
          <h2>Edit Subscription</h2>
          <form>
            <label>
              Username:
              <input
                type="text"
                name="username"
                value={newSubscription.username}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={newSubscription.email}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <label>
              Full Name:
              <input
                type="text"
                name="fullName"
                value={newSubscription.fullName}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <label>
              Subscription Type:
              <input
                type="text"
                name="subscriptionType"
                value={newSubscription.subscriptionType}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <button type="button" onClick={updateSubscription}>
              Update Subscription
            </button>
          </form>
        </div>
      )}

      <div style={styles.form}>
        <h2>Add Subscription</h2>
        <form>
          <label>
            Username:
            <input
              type="text"
              name="username"
              value={newSubscription.username}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={newSubscription.email}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label>
            Full Name:
            <input
              type="text"
              name="fullName"
              value={newSubscription.fullName}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label>
            Subscription Type:
            <input
              type="text"
              name="subscriptionType"
              value={newSubscription.subscriptionType}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <button type="button" onClick={addSubscription}>
            Add Subscription
          </button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
  },
  heading: {
    textAlign: 'center',
    fontSize: '24px',
    marginBottom: '20px',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
  },
  subscriptionItem: {
    marginBottom: '20px',
    border: '1px solid #ccc',
    padding: '10px',
    borderRadius: '5px',
  },
};

export default SubscriptionApp;