angular.module('lightApp.services', [])
    .factory('API', ['$resource',
        function($resource) {
            return $resource(
                'http://localhost:3000/employees/:id', { id: '@_id' }, { update: { method: 'put' } }
            );
        }

    ]);