import type { ComponentSuggestion } from '../types/components';

export const componentDatabase: Record<string, ComponentSuggestion> = {
  login: {
    components: [
      { name: 'FormContainer', purpose: 'Form wrapper with validation', props: 'responsive, onSubmit, children' },
      { name: 'Input', purpose: 'Text input field', props: 'type, label, required, placeholder' },
      { name: 'Button', purpose: 'Action trigger', props: 'variant, type, disabled, children' },
      { name: 'Checkbox', purpose: 'Checkbox input', props: 'checked, onChange, children' }
    ],
    code: `import React, { useState } from 'react';
import { FormContainer, Input, Button, Checkbox } from '@visa/nova-react';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic
  };

  return (
    <FormContainer responsive onSubmit={handleSubmit}>
      <Input 
        type="email" 
        label="Email" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required 
        placeholder="Enter your email"
      />
      <Input 
        type="password" 
        label="Password" 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required 
        placeholder="Enter your password"
      />
      <Checkbox 
        checked={rememberMe}
        onChange={(e) => setRememberMe(e.target.checked)}
      >
        Remember me
      </Checkbox>
      <Button variant="primary" type="submit">
        Login
      </Button>
    </FormContainer>
  );
}

export default LoginForm;`,
    preview: 'login'
  },
  navigation: {
    components: [
      { name: 'NavContainer', purpose: 'Navigation wrapper', props: 'orientation, variant, children' },
      { name: 'NavItem', purpose: 'Navigation link', props: 'href, active, icon, children' },
      { name: 'NavGroup', purpose: 'Group navigation items', props: 'title, collapsible, children' }
    ],
    code: `import React from 'react';
import { NavContainer, NavItem, NavGroup } from '@visa/nova-react';
import { Home, Settings, User, CreditCard } from 'lucide-react';

function Navigation() {
  return (
    <NavContainer orientation="vertical" variant="sidebar">
      <NavItem href="/" active icon={<Home />}>
        Dashboard
      </NavItem>
      <NavGroup title="Account" collapsible>
        <NavItem href="/profile" icon={<User />}>
          Profile
        </NavItem>
        <NavItem href="/settings" icon={<Settings />}>
          Settings
        </NavItem>
      </NavGroup>
      <NavItem href="/payments" icon={<CreditCard />}>
        Payments
      </NavItem>
    </NavContainer>
  );
}

export default Navigation;`,
    preview: 'navigation'
  },
  button: {
    components: [
      { name: 'Button', purpose: 'Action trigger', props: 'variant, size, disabled, loading, children' },
      { name: 'ButtonGroup', purpose: 'Group related buttons', props: 'orientation, spacing, children' }
    ],
    code: `import React from 'react';
import { Button, ButtonGroup } from '@visa/nova-react';

function ButtonExample() {
  return (
    <ButtonGroup orientation="horizontal" spacing="medium">
      <Button variant="primary" size="large">
        Primary Action
      </Button>
      <Button variant="secondary" size="large">
        Secondary Action
      </Button>
      <Button variant="outline" size="large">
        Cancel
      </Button>
    </ButtonGroup>
  );
}

export default ButtonExample;`,
    preview: 'button'
  },
  card: {
    components: [
      { name: 'Card', purpose: 'Content container', props: 'variant, padding, shadow, children' },
      { name: 'CardHeader', purpose: 'Card header section', props: 'title, subtitle, action' },
      { name: 'CardBody', purpose: 'Card main content', props: 'children' },
      { name: 'CardFooter', purpose: 'Card footer section', props: 'children, align' }
    ],
    code: `import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Button } from '@visa/nova-react';

function CardExample() {
  return (
    <Card variant="elevated" padding="large" shadow="medium">
      <CardHeader 
        title="Payment Method"
        subtitle="Add a new payment method to your account"
        action={<Button variant="text" size="small">Edit</Button>}
      />
      <CardBody>
        <p>Your payment information is encrypted and secure.</p>
      </CardBody>
      <CardFooter align="right">
        <Button variant="outline">Cancel</Button>
        <Button variant="primary">Add Payment Method</Button>
      </CardFooter>
    </Card>
  );
}

export default CardExample;`,
    preview: 'card'
  },
  table: {
    components: [
      { name: 'Table', purpose: 'Data table container', props: 'columns, data, sortable, selectable' },
      { name: 'TableHeader', purpose: 'Table header row', props: 'columns, onSort' },
      { name: 'TableRow', purpose: 'Table data row', props: 'data, onClick, selected' },
      { name: 'TablePagination', purpose: 'Table pagination controls', props: 'currentPage, totalPages, onPageChange' }
    ],
    code: `import React, { useState } from 'react';
import { Table, TableHeader, TableRow, TablePagination } from '@visa/nova-react';

function TableExample() {
  const [currentPage, setCurrentPage] = useState(1);
  
  const columns = [
    { key: 'id', label: 'ID', sortable: true },
    { key: 'name', label: 'Name', sortable: true },
    { key: 'amount', label: 'Amount', sortable: true },
    { key: 'status', label: 'Status' }
  ];
  
  const data = [
    { id: '001', name: 'John Doe', amount: '$1,234.56', status: 'Active' },
    { id: '002', name: 'Jane Smith', amount: '$2,345.67', status: 'Pending' },
    { id: '003', name: 'Bob Johnson', amount: '$3,456.78', status: 'Active' }
  ];

  return (
    <>
      <Table columns={columns} data={data} sortable selectable>
        <TableHeader columns={columns} onSort={(key) => console.log('Sort by:', key)} />
        {data.map((row) => (
          <TableRow key={row.id} data={row} onClick={() => console.log('Row clicked:', row)} />
        ))}
      </Table>
      <TablePagination 
        currentPage={currentPage}
        totalPages={10}
        onPageChange={setCurrentPage}
      />
    </>
  );
}

export default TableExample;`,
    preview: 'table'
  },
  modal: {
    components: [
      { name: 'Modal', purpose: 'Modal dialog container', props: 'open, onClose, size, children' },
      { name: 'ModalHeader', purpose: 'Modal header', props: 'title, onClose' },
      { name: 'ModalBody', purpose: 'Modal content', props: 'children' },
      { name: 'ModalFooter', purpose: 'Modal actions', props: 'children, align' }
    ],
    code: `import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from '@visa/nova-react';

function ModalExample() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setIsOpen(true)}>
        Open Modal
      </Button>
      
      <Modal open={isOpen} onClose={() => setIsOpen(false)} size="medium">
        <ModalHeader title="Confirm Action" onClose={() => setIsOpen(false)} />
        <ModalBody>
          <p>Are you sure you want to proceed with this action?</p>
          <p>This action cannot be undone.</p>
        </ModalBody>
        <ModalFooter align="right">
          <Button variant="outline" onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={() => setIsOpen(false)}>
            Confirm
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default ModalExample;`,
    preview: 'modal'
  },
  dashboard: {
    components: [
      { name: 'DashboardGrid', purpose: 'Layout container for dashboard widgets', props: 'columns, gap, responsive' },
      { name: 'MetricsCard', purpose: 'Display key metrics with trends', props: 'title, value, trend, variant' },
      { name: 'Chart', purpose: 'Data visualization component', props: 'type, data, config' },
      { name: 'QuickActions', purpose: 'Common action buttons', props: 'actions, variant' }
    ],
    code: `import React from 'react';
import { DashboardGrid, MetricsCard, Chart, QuickActions } from '@visa/nova-react';

function Dashboard() {
  const metrics = [
    { title: 'Total Revenue', value: '$124,563', trend: '+12%', variant: 'success' },
    { title: 'Active Users', value: '8,429', trend: '+5%', variant: 'success' },
    { title: 'Conversion Rate', value: '3.2%', trend: '-2%', variant: 'warning' }
  ];

  const chartData = [
    { month: 'Jan', revenue: 4000 },
    { month: 'Feb', revenue: 3000 },
    { month: 'Mar', revenue: 5000 }
  ];

  const quickActions = [
    { label: 'Export Data', action: 'export' },
    { label: 'Generate Report', action: 'report' }
  ];

  return (
    <DashboardGrid columns={3} gap="large" responsive>
      {metrics.map((metric, index) => (
        <MetricsCard key={index} {...metric} />
      ))}
      <Chart 
        type="line" 
        data={chartData} 
        config={{ responsive: true }} 
      />
      <QuickActions actions={quickActions} variant="outline" />
    </DashboardGrid>
  );
}

export default Dashboard;`,
    preview: 'dashboard'
  },
  search: {
    components: [
      { name: 'SearchBar', purpose: 'Search input with autocomplete', props: 'placeholder, onSearch, suggestions' },
      { name: 'SearchFilters', purpose: 'Filter options for search results', props: 'filters, onFilterChange' },
      { name: 'SearchResults', purpose: 'Display search results', props: 'results, loading, emptyState' },
      { name: 'SearchTags', purpose: 'Active search filters display', props: 'tags, onRemove' }
    ],
    code: `import React, { useState } from 'react';
import { SearchBar, SearchFilters, SearchResults, SearchTags } from '@visa/nova-react';

function SearchInterface() {
  const [query, setQuery] = useState('');
  const [filters, setFilters] = useState([]);
  const [results, setResults] = useState([]);

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
    // Perform search logic
  };

  const filterOptions = [
    { id: 'category', label: 'Category', options: ['All', 'Products', 'Services'] },
    { id: 'date', label: 'Date Range', options: ['Last 7 days', 'Last 30 days', 'Last year'] }
  ];

  return (
    <div>
      <SearchBar 
        placeholder="Search products, services..." 
        onSearch={handleSearch}
        suggestions={['Popular searches', 'Recent items']}
      />
      <SearchFilters 
        filters={filterOptions}
        onFilterChange={setFilters}
      />
      {filters.length > 0 && (
        <SearchTags 
          tags={filters}
          onRemove={(tag) => setFilters(prev => prev.filter(f => f !== tag))}
        />
      )}
      <SearchResults 
        results={results}
        loading={false}
        emptyState="No results found. Try adjusting your search terms."
      />
    </div>
  );
}

export default SearchInterface;`,
    preview: 'search'
  },
  productCard: {
    components: [
      { name: 'ProductCard', purpose: 'Product display with image and details', props: 'product, variant, showPrice' },
      { name: 'ProductImage', purpose: 'Product image with fallback', props: 'src, alt, aspectRatio' },
      { name: 'ProductInfo', purpose: 'Product title and description', props: 'title, description, truncate' },
      { name: 'PriceDisplay', purpose: 'Price with discounts and currency', props: 'price, originalPrice, currency' }
    ],
    code: `import React from 'react';
import { ProductCard, ProductImage, ProductInfo, PriceDisplay, Button } from '@visa/nova-react';

function ProductGrid() {
  const products = [
    {
      id: 1,
      title: 'Premium Wireless Headphones',
      description: 'High-quality audio with noise cancellation',
      image: '/images/headphones.jpg',
      price: 199.99,
      originalPrice: 249.99
    },
    {
      id: 2,
      title: 'Smart Fitness Watch',
      description: 'Track your health and fitness goals',
      image: '/images/watch.jpg',
      price: 299.99
    }
  ];

  return (
    <div className="product-grid">
      {products.map(product => (
        <ProductCard key={product.id} variant="elevated" showPrice>
          <ProductImage 
            src={product.image} 
            alt={product.title}
            aspectRatio="4:3"
          />
          <ProductInfo 
            title={product.title}
            description={product.description}
            truncate={2}
          />
          <PriceDisplay 
            price={product.price}
            originalPrice={product.originalPrice}
            currency="USD"
          />
          <Button variant="primary" fullWidth>
            Add to Cart
          </Button>
        </ProductCard>
      ))}
    </div>
  );
}

export default ProductGrid;`,
    preview: 'productCard'
  },
  settings: {
    components: [
      { name: 'SettingsGroup', purpose: 'Group related settings together', props: 'title, description, children' },
      { name: 'SettingItem', purpose: 'Individual setting with label', props: 'label, description, children' },
      { name: 'Switch', purpose: 'Toggle switch for boolean settings', props: 'checked, onChange, disabled' },
      { name: 'Select', purpose: 'Dropdown for option selection', props: 'value, options, onChange' }
    ],
    code: `import React, { useState } from 'react';
import { SettingsGroup, SettingItem, Switch, Select, Button } from '@visa/nova-react';

function SettingsPanel() {
  const [notifications, setNotifications] = useState(true);
  const [theme, setTheme] = useState('auto');
  const [language, setLanguage] = useState('en');

  const themeOptions = [
    { value: 'light', label: 'Light' },
    { value: 'dark', label: 'Dark' },
    { value: 'auto', label: 'Auto' }
  ];

  const languageOptions = [
    { value: 'en', label: 'English' },
    { value: 'es', label: 'Spanish' },
    { value: 'fr', label: 'French' }
  ];

  return (
    <div>
      <SettingsGroup 
        title="Appearance" 
        description="Customize how the application looks"
      >
        <SettingItem 
          label="Theme" 
          description="Choose your preferred color scheme"
        >
          <Select 
            value={theme}
            options={themeOptions}
            onChange={setTheme}
          />
        </SettingItem>
      </SettingsGroup>

      <SettingsGroup 
        title="Notifications" 
        description="Manage your notification preferences"
      >
        <SettingItem 
          label="Push Notifications" 
          description="Receive notifications on your device"
        >
          <Switch 
            checked={notifications}
            onChange={setNotifications}
          />
        </SettingItem>
      </SettingsGroup>

      <SettingsGroup 
        title="Language & Region" 
        description="Set your language and regional preferences"
      >
        <SettingItem 
          label="Language" 
          description="Choose your preferred language"
        >
          <Select 
            value={language}
            options={languageOptions}
            onChange={setLanguage}
          />
        </SettingItem>
      </SettingsGroup>

      <Button variant="primary">Save Changes</Button>
    </div>
  );
}

export default SettingsPanel;`,
    preview: 'settings'
  },
  alert: {
    components: [
      { name: 'Alert', purpose: 'Display important messages', props: 'variant, title, dismissible, onDismiss' },
      { name: 'AlertIcon', purpose: 'Icon for alert type', props: 'variant' },
      { name: 'AlertContent', purpose: 'Alert message content', props: 'children' },
      { name: 'AlertActions', purpose: 'Action buttons for alerts', props: 'actions, align' }
    ],
    code: `import React, { useState } from 'react';
import { Alert, AlertIcon, AlertContent, AlertActions, Button } from '@visa/nova-react';

function AlertExample() {
  const [showSuccess, setShowSuccess] = useState(true);
  const [showWarning, setShowWarning] = useState(true);
  const [showError, setShowError] = useState(true);

  const handleRetry = () => {
    console.log('Retrying action...');
  };

  return (
    <div className="alerts-container">
      {showSuccess && (
        <Alert 
          variant="success" 
          title="Success!" 
          dismissible 
          onDismiss={() => setShowSuccess(false)}
        >
          <AlertIcon variant="success" />
          <AlertContent>
            Your changes have been saved successfully.
          </AlertContent>
        </Alert>
      )}

      {showWarning && (
        <Alert 
          variant="warning" 
          title="Warning" 
          dismissible 
          onDismiss={() => setShowWarning(false)}
        >
          <AlertIcon variant="warning" />
          <AlertContent>
            Your session will expire in 5 minutes. Please save your work.
          </AlertContent>
          <AlertActions align="right">
            <Button variant="outline" size="small">
              Extend Session
            </Button>
          </AlertActions>
        </Alert>
      )}

      {showError && (
        <Alert 
          variant="error" 
          title="Error" 
          dismissible 
          onDismiss={() => setShowError(false)}
        >
          <AlertIcon variant="error" />
          <AlertContent>
            Failed to save changes. Please check your connection and try again.
          </AlertContent>
          <AlertActions align="right">
            <Button variant="outline" size="small" onClick={handleRetry}>
              Retry
            </Button>
          </AlertActions>
        </Alert>
      )}
    </div>
  );
}

export default AlertExample;`,
    preview: 'alert'
  },
  profile: {
    components: [
      { name: 'ProfileCard', purpose: 'User profile display', props: 'user, variant, showActions' },
      { name: 'Avatar', purpose: 'User profile image', props: 'src, alt, size, fallback' },
      { name: 'UserInfo', purpose: 'User details display', props: 'name, title, email, showBadge' },
      { name: 'ProfileActions', purpose: 'Profile action buttons', props: 'actions, variant' }
    ],
    code: `import React from 'react';
import { ProfileCard, Avatar, UserInfo, ProfileActions, Button } from '@visa/nova-react';

function UserProfile() {
  const user = {
    name: 'Sarah Johnson',
    title: 'Senior Product Manager',
    email: 'sarah.johnson@company.com',
    avatar: '/images/avatar.jpg',
    verified: true
  };

  const profileActions = [
    { label: 'Edit Profile', action: 'edit', variant: 'primary' },
    { label: 'View Activity', action: 'activity', variant: 'outline' },
    { label: 'Settings', action: 'settings', variant: 'outline' }
  ];

  return (
    <ProfileCard variant="elevated" showActions>
      <Avatar 
        src={user.avatar}
        alt={user.name}
        size="large"
        fallback={user.name.split(' ').map(n => n[0]).join('')}
      />
      <UserInfo 
        name={user.name}
        title={user.title}
        email={user.email}
        showBadge={user.verified}
      />
      <ProfileActions actions={profileActions} variant="stacked" />
    </ProfileCard>
  );
}

export default UserProfile;`,
    preview: 'profile'
  }
};

export const componentLibrary = [
  {
    category: 'Forms',
    components: [
      { name: 'FormContainer', description: 'Wrapper for form elements with validation support' },
      { name: 'Input', description: 'Text input field with various types and validation' },
      { name: 'Textarea', description: 'Multi-line text input' },
      { name: 'Select', description: 'Dropdown selection field' },
      { name: 'Checkbox', description: 'Checkbox input for boolean values' },
      { name: 'Radio', description: 'Radio button for single selection' },
      { name: 'Switch', description: 'Toggle switch for on/off states' }
    ]
  },
  {
    category: 'Buttons',
    components: [
      { name: 'Button', description: 'Primary action trigger with multiple variants' },
      { name: 'ButtonGroup', description: 'Group related buttons together' },
      { name: 'IconButton', description: 'Button with only an icon' }
    ]
  },
  {
    category: 'Layout',
    components: [
      { name: 'Container', description: 'Page content wrapper' },
      { name: 'Grid', description: 'Responsive grid layout' },
      { name: 'Stack', description: 'Vertical or horizontal stack layout' },
      { name: 'Divider', description: 'Visual separator' }
    ]
  },
  {
    category: 'Navigation',
    components: [
      { name: 'NavContainer', description: 'Navigation wrapper' },
      { name: 'NavItem', description: 'Individual navigation link' },
      { name: 'Breadcrumb', description: 'Breadcrumb navigation' },
      { name: 'Tabs', description: 'Tabbed navigation' }
    ]
  },
  {
    category: 'Data Display',
    components: [
      { name: 'Table', description: 'Data table with sorting and selection' },
      { name: 'Card', description: 'Content container with sections' },
      { name: 'List', description: 'Formatted list component' },
      { name: 'Badge', description: 'Status or count indicator' }
    ]
  },
  {
    category: 'Feedback',
    components: [
      { name: 'Alert', description: 'Informational message display' },
      { name: 'Toast', description: 'Temporary notification' },
      { name: 'Progress', description: 'Progress indicator' },
      { name: 'Spinner', description: 'Loading spinner' }
    ]
  },
  {
    category: 'Overlays',
    components: [
      { name: 'Modal', description: 'Modal dialog window' },
      { name: 'Popover', description: 'Contextual popup' },
      { name: 'Tooltip', description: 'Hover tooltip' },
      { name: 'Drawer', description: 'Slide-out panel' }
    ]
  }
];