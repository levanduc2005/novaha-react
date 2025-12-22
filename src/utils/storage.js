// Local Storage utilities

/**
 * Get item from local storage
 * @param {string} key - Key to get
 * @param {any} defaultValue - Default value if not found
 * @returns {any} Value from storage
 */
export const getFromStorage = (key, defaultValue = null) => {
  try {
    const item = localStorage.getItem(key)
    return item ? JSON.parse(item) : defaultValue
  } catch (error) {
    console.error(`Error reading from storage (${key}):`, error)
    return defaultValue
  }
}

/**
 * Save item to local storage
 * @param {string} key - Key to save
 * @param {any} value - Value to save
 * @returns {boolean} Success status
 */
export const saveToStorage = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value))
    return true
  } catch (error) {
    console.error(`Error saving to storage (${key}):`, error)
    return false
  }
}

/**
 * Remove item from local storage
 * @param {string} key - Key to remove
 * @returns {boolean} Success status
 */
export const removeFromStorage = (key) => {
  try {
    localStorage.removeItem(key)
    return true
  } catch (error) {
    console.error(`Error removing from storage (${key}):`, error)
    return false
  }
}

/**
 * Clear all local storage
 * @returns {boolean} Success status
 */
export const clearStorage = () => {
  try {
    localStorage.clear()
    return true
  } catch (error) {
    console.error("Error clearing storage:", error)
    return false
  }
}

// Session storage helpers
export const getFromSession = (key, defaultValue = null) => {
  try {
    const item = sessionStorage.getItem(key)
    return item ? JSON.parse(item) : defaultValue
  } catch (error) {
    console.error(`Error reading from session (${key}):`, error)
    return defaultValue
  }
}

export const saveToSession = (key, value) => {
  try {
    sessionStorage.setItem(key, JSON.stringify(value))
    return true
  } catch (error) {
    console.error(`Error saving to session (${key}):`, error)
    return false
  }
}
