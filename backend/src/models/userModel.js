import db from "../config/db.js";

const findByEmail = async (email) => {
  const [rows] = await db.execute("SELECT * FROM users WHERE email=?", [email]);
  return rows[0];
};

const createUser = async (name, email, password) => {
  const [result] = await db.execute(
    `INSERT INTO users
        (name,email,password)
        VALUES (?,?,?)`,

    [name, email, password],
  );

  return result.insertId;
};

const findById = async (id) => {
  const [rows] = await db.execute(
    `SELECT
            id,
            name,
            email,
            created_at
        FROM users
        WHERE id=?`,

    [id],
  );

  return rows[0];
};

export { findByEmail, createUser, findById };
