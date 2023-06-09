import request from "../utils/request"

const ENDPOINT = "http://localhost:3001/api/auth"

/**
 * @typedef {Object} AuthData
 * @property {string} [username] - Required on Signup
 * @property {string} [email]  - Required on Signup
 * @property {string} [usernameOrEmail] - Required on Login
 * @property {string} password
 *
 * @typedef {Object} User
 * @property {string} _id
 * @property {string} username
 *
 * @typedef {Object} AuthResponse
 * @property {User} user
 * @property {string} token
 * @property {string} error
 *
 */

const AuthAPI = {
  /**
   *
   * @param {AuthData} formData
   * @returns {Promise<AuthResponse> | Promise<Error>}
   */
  login: async ({ usernameOrEmail, password }) =>
    request(ENDPOINT + "/login", { usernameOrEmail, password }),
  /**
   *
   * @param {AuthData} formData
   * @returns {Promise<AuthResponse> | Promise<Error>}
   */
  signup: async ({ username, email, password }) =>
    request(ENDPOINT + "/signup", { username, email, password }),
}

export default AuthAPI
