import db from "../config/db.js";

const findByEmail = async (email) => {
  const [rows] = await db.execute(
    `
    SELECT
      u.*,
      r.name AS role
    FROM users u
    INNER JOIN roles r
      ON u.role_id = r.id
    WHERE u.email = ?
    `,
    [email],
  );

  return rows[0];
};

const createUser = async (name, email, password, roleId = 4) => {
  const [result] = await db.execute(
    `
    INSERT INTO users
      (role_id, name, email, password)
    VALUES (?, ?, ?, ?)
    `,
    [roleId, name, email, password],
  );

  return result.insertId;
};

const findById = async (id) => {
  const [rows] = await db.execute(
    `
    SELECT
      u.id,
      u.name,
      u.email,
      r.id AS role_id,
      r.name AS role,
      u.status,
      u.created_at
    FROM users u
    INNER JOIN roles r
      ON u.role_id = r.id
    WHERE u.id = ?
    `,
    [id],
  );

  return rows[0];
};

export { findByEmail, createUser, findById };
