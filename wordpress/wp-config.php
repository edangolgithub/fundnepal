<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress-db' );

/** MySQL database username */
define( 'DB_USER', 'wp-user' );

/** MySQL database password */
define( 'DB_PASSWORD', 'wp-password' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         ')iXrWl,rTm)9*3H?o:K2=>E]!(49EQd#u]JSXF`x1,|/}2s5UYj-}mtf2R]z,||b' );
define( 'SECURE_AUTH_KEY',  '$#B7xA*)/_8-~pMD`Qn&v]04}C4jd3IW|Ui(,ijO)b,b8.{Es?6MDc(5fQO;K 6~' );
define( 'LOGGED_IN_KEY',    'cT9^r[E(DlQeJ/PNg2Nm#=s$!3KH~4S>oL0sH@)p9#+rD67f:hsSG&.PJ?&neC:S' );
define( 'NONCE_KEY',        'JzArF1Imc8f;ZE~t0 K4$FQSsd<UWFcsiSt{&|GLwrv`OFO)$*Q3b>!yZl8zqE8H' );
define( 'AUTH_SALT',        '<Ul6AiNVyOG5k.8(tUl?::m/Wlz^]T90&>qFQeU<U5lQCCbm2B>}^{fI=_Yl5X%U' );
define( 'SECURE_AUTH_SALT', 'qv&=> R/^XDkOAZysJ]D?PJRKkLkg7r7d<s_8fK@Bvvwo ~jDo~zM6SiGmWv0BS9' );
define( 'LOGGED_IN_SALT',   'jXgaj#%w 2Znp#P&e1VV0Xr2ZQ@NG6?xbnNiRb!s6bHK20s}mQM:{PMAR%*fAQ$G' );
define( 'NONCE_SALT',       'nKXpl71a2kP/!-G1Y8#B?W%Sd:Z|Pw:P.=[zB&BqbO]ZxF>i?2}>$Z;{3rK$f0`r' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
