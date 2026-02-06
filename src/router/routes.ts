export interface RouteConfig {
  path: string;
  componentName: string;
  folderName: string;
}

export const routeMappings: RouteConfig[] = [
  {
    path: '/ai-dialog',
    componentName: 'AIDialog',
    folderName: 'Окно_ai-диалога_(personalearn)',
  },
  {
    path: '/dashboard-manager-1',
    componentName: 'DashboardManager1',
    folderName: 'dashboard_руководителя_(главная)_1',
  },
  {
    path: '/dashboard-manager-2',
    componentName: 'DashboardManager2',
    folderName: 'dashboard_руководителя_(главная)_2',
  },
  {
    path: '/employee-survey',
    componentName: 'EmployeeSurvey',
    folderName: 'анкетирование_сотрудника',
  },
  {
    path: '/ai-knowledge-check',
    componentName: 'AIKnowledgeCheck',
    folderName: 'диалог_с_ai_(проверка_знаний)',
  },
  {
    path: '/training-materials-1',
    componentName: 'TrainingMaterials1',
    folderName: 'материалы_обучения_1',
  },
  {
    path: '/training-materials-2',
    componentName: 'TrainingMaterials2',
    folderName: 'материалы_обучения_2',
  },
  {
    path: '/system-settings-1',
    componentName: 'SystemSettings1',
    folderName: 'настройки_системы_1',
  },
  {
    path: '/system-settings-2',
    componentName: 'SystemSettings2',
    folderName: 'настройки_системы_2',
  },
  {
    path: '/employee-list-1',
    componentName: 'EmployeeList1',
    folderName: 'список_сотрудников_1',
  },
  {
    path: '/employee-list-2',
    componentName: 'EmployeeList2',
    folderName: 'список_сотрудников_2',
  },
  {
    path: '/login',
    componentName: 'Login',
    folderName: 'экран_авторизации',
  },
  {
    path: '/analytics-admin-1',
    componentName: 'AnalyticsAdmin1',
    folderName: 'экран_аналитики_(admin)_1',
  },
  {
    path: '/analytics-admin-2',
    componentName: 'AnalyticsAdmin2',
    folderName: 'экран_аналитики_(admin)_2',
  },
  {
    path: '/employee-training',
    componentName: 'EmployeeTraining',
    folderName: 'экран_обучения_сотрудника',
  },
];
