/*
 * Copyright (c) 2015-2016 Codenvy, S.A.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v10.html
 *
 * Contributors:
 *   Codenvy, S.A. - initial API and implementation
 */
'use strict';

/**
 * Defines a directive for creating List Header.
 * @author Oleksii Orel
 */
export class CheListHeader {

  /**
   * Default constructor that is using resource
   * @ngInject for Dependency injection
   */
  constructor() {
    this.restrict = 'E';
    this.replace = true;
    this.transclude = true;
    this.templateUrl = 'components/widget/list/che-list-header.html';

    // scope values
    this.scope = {
      placeholder: '@chePlaceholder',
      valueModel: '=cheSearchModel'
    };
  }

  link($scope, element) {
    $scope.$watch('isShown', (isShown) => {
      if (isShown) {
        element.addClass('search-component-flex');
        element.find('input').focus();
      } else {
        $scope.valueModel = '';
        element.removeClass('search-component-flex');
      }
    });
  }
}
