/**
 * @description :: The conventional "custom" hook.  Extends this app with custom server-start-time and request-time logic.
 * @docs        :: https://sailsjs.com/docs/concepts/extending-sails/hooks
 */

module.exports = function defineCustomHook(sails) {

  return {

    /**
     * Runs when a Sails app loads/lifts.
     */
    initialize: async function () {

      sails.log.info('Initializing project hook... (`api/hooks/custom/`)');

    },


    routes: {

    }


  };

};
