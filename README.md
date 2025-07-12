# 💰 Budget and Expense Tracker App

This is a simple React + Redux application designed to help you manage your monthly budget, track expenses by category, and view your remaining balance in real-time.

---

## 🚀 Features

- ✅ Set a total budget.
- ➕ Add expenses with a description, amount, and category.
- 🧾 View all added expenses in a table.
- 🗑️ Delete individual expenses.
- 📊 View the total budget, total expenses, and remaining balance.

---

## 🛠️ Tech Stack

- **React**
- **Redux (with React-Redux hooks)**
- **JavaScript (ES6+)**
- **CSS** for styling

---

## 📂 Folder Structure

```
my-budget-app/
 ├── public/
 ├── src/
 │   ├── components/
 │   │   ├── Budget.jsx
 │   │   ├── ExpenseForm.jsx
 │   │   ├── ExpensesList.jsx
 │   ├── redux/
 │   │   ├── actions.js
 │   │   ├── actionTypes.js
 │   │   ├── reducer.js
 │   │   ├── store.js
 │   ├── App.js
 │   ├── index.js
 │   └── styles/
 │       ├── Budget.css
 │       ├── ExpenseForm.css
 │       ├── ExpensesList.css
```

---

## 🔧 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/budget-tracker.git
cd budget-tracker
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm start
```

Open your browser at [http://localhost:3000](http://localhost:3000).

---

## 🧠 State Management

This app uses Redux to manage state:

- **budget**: Total budget value.
- **expenses**: Array of added expenses.

### Example Redux State:

```javascript
{
  budget: 5000,
  expenses: [
    { id: 1, description: "Groceries", amount: 1200, category: "Food" },
    { id: 2, description: "Bus Pass", amount: 500, category: "Transport" }
  ]
}
```

---

## 🧼 Code Quality

- Clean and readable component structure.
- Well-separated Redux logic.
- Styled using basic CSS with Flexbox layout.

---

## ✨ Future Improvements

- Edit expense feature.
- Filter by category.
- Persistent data via localStorage or Firebase.
- Charts for visual insights.
